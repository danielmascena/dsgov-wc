import {
	Component, 
	h, 
	Prop, 
	Element, 
	State, 
	Event, 
	EventEmitter, 
	Listen, 
	Method, 
	Host
} from '@stencil/core';

const WARNING_ICON = "exclamation-triangle";
const ERROR_ICON = "times-circle";

@Component({
	tag: 'br-input',
	styleUrls: ['./index.scss', '../../../scss/dsgov.scss'],
	scoped: true
})
export class BrInput {

	brInput!: HTMLInputElement;
	warnMsg!: HTMLParagraphElement;

	@Prop() type?: string = 'text';
	@Prop() idInput?: string = 'input';
	@Prop() name?: string;
	@Prop() placeholder?: string;
	@Prop() disabled?: boolean;
	@Prop() label?: string;
	@Prop() icon?: string;
	@Prop() isRequired?: boolean;

	@State() invalid: boolean;
	@State() feedbackText: string;
	@State() requiredText: boolean;

	@Element() el: HTMLElement;

	@Event({
	    eventName: "inputInvalid",
	    cancelable: true,
	    bubbles: true,
	}) invalidInput: EventEmitter;

	@Listen("inputInvalid", { capture: true })
	displayInvalidNotification(event: EventEmitter) {
		this.invalid = true;
	}

	@Method() async fireInvalidInput () {
		this.invalidInput.emit();
	}

	@Method() async reset() {
		this.invalid = false;
	}

	blurHandler(event: FocusEvent) {
		const input = (event.target as HTMLInputElement);
		console.dir(input.validity);
		if (input.validity.valid) {
			console.log("%cvalid state", "color: green", event);
			this.invalid = false;
			this.feedbackText = "Campo correto";
		}
		if (input.validity.valueMissing) {
			this.feedbackText = "Field required";
			this.requiredText = true;
			this.invalid = true;
			console.log(this.invalid);
			input.classList.add("input-required");
		} else input.classList.remove("input-required");
	}

	verifyCapsLock(event: KeyboardEvent) {
		if (event.getModifierState("CapsLock")) {
			(event.target as HTMLInputElement).classList?.add("show-warning");
		} else {
			(event.target as HTMLInputElement).classList?.remove("show-warning");
		}
	}

	render() {
		return (
			<Host class={
				{
				"invalid-state": this.invalid
				}
			}>
				<label class="input-label">{this.label}</label>
				<input
					type={this.type}
					placeholder={this.placeholder}
					required={this.isRequired}
					disabled={this.disabled} 
					id={this.idInput}
					onBlur={this.blurHandler}
					onKeyUp={this.verifyCapsLock}
					ref={(el) => this.brInput = el as HTMLInputElement}
				/>
				{this.type === 'password' && <img class="input__append-icon" src="/images/exclamation-triangle.svg" width="20"/>}
				
				<p class="feedback-message" hidden>
					<img src={`/images/${ERROR_ICON}.svg`} />
					&nbsp;{this.feedbackText} Informe um valor
					{this.requiredText && <span style={{color: 'red'}}>Informe um valor</span>}
				</p>
				
				<p ref={(el) => this.warnMsg = el as HTMLParagraphElement}
					class="warning-message" 
					hidden>
					<img src={`/images/${WARNING_ICON}.svg`} />
					&nbsp;O Caps Lock esta&#769; ligado!
				</p>
			</Host>
		);
	}
}
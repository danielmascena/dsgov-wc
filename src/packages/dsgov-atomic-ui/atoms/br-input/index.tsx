import {Component, h, Prop, State, Event, EventEmitter, Listen, Method, Host} from '@stencil/core';

@Component({
	tag: 'br-input',
	styleUrls: ['./index.scss', '../../../scss/dsgov.scss'],
	scoped: true
})
export class BrInput {
	@Prop() type?: string = 'text';
	@Prop() idInput?: string = 'input';
	@Prop() name?: string;
	@Prop() placeholder?: string;
	@Prop() disabled?: boolean;
	@Prop() label?: string;
	@Prop() icon?: string;

	@State() invalid: boolean;

	@Event({
	    eventName: "inputInvalid",
	    cancelable: true,
	    bubbles: true,
	}) invalidInput: EventEmitter;

	@Listen("inputInvalid", { capture: true })
	displayInvalidNotification(event: EventEmitter) {
		this.invalid = true;
		console.log('%cInvalid value', 'color: red; font-size:150%', event, this.invalid);
	}

	@Method() async fireInvalidInput () {
		this.invalidInput.emit();
	}
	@Method() async reset() {
		this.invalid = false;
	}

	render() {
		return (
			<Host>
				<label>{this.label}</label>
				<input class={this.invalid ? "invalid-input" : ""}
					type={this.type}
					placeholder={this.placeholder} 
					disabled={this.disabled} 
					id={this.idInput} 
				/>
				{this.type === 'password' && <img src="assets/icons/eyes.png" width="20"/>}
			
			</Host>
		);
	}
}
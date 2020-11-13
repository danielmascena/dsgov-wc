import {Component, h, Prop, Host} from '@stencil/core';

@Component({
	tag: 'br-input',
	styleUrls: ['./index.scss', '../../../scss/dsgov.scss'],
	scoped: true
})
export class BrInput {
	@Prop() type?: string;
	@Prop() idInput?: string = 'input';
	@Prop() name?: string;
	@Prop() placeholder?: string;
	@Prop() disabled?: boolean;
	@Prop() label?: string;
	@Prop() icon?: string;

	render() {
		return (
			<Host>
				<label>{this.label}</label>
				<input placeholder={this.placeholder} disabled={this.disabled} id={this.idInput} />
				{this.icon && <img src="assets/icons/icon.png" width="20"/>}
			
			</Host>
		);
	}
}
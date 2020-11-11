import {Component, h} from '@stencil/core';

@Component({
	tag: 'input-test'
})
export class InputTest {

	render() {
		return <br-input placeholder="my test" label="CPF"></br-input>;
	}
}
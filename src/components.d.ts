/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BrAccordion {
        "atitle": string;
        "content": string;
    }
    interface BrButton {
        /**
          * The listener for button
         */
        "callback"?: {
    type: string,
    listener: (eventRaised?: UIEvent) => void,
    capture?: boolean
  };
        /**
          * The primary button
         */
        "primary": boolean;
        /**
          * The button title
         */
        "titleBtn": string;
    }
    interface BrInput {
        "disabled"?: boolean;
        "icon"?: string;
        "idInput"?: string;
        "label"?: string;
        "name"?: string;
        "placeholder"?: string;
        "type"?: string;
    }
    interface InputTest {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLBrAccordionElement extends Components.BrAccordion, HTMLStencilElement {
    }
    var HTMLBrAccordionElement: {
        prototype: HTMLBrAccordionElement;
        new (): HTMLBrAccordionElement;
    };
    interface HTMLBrButtonElement extends Components.BrButton, HTMLStencilElement {
    }
    var HTMLBrButtonElement: {
        prototype: HTMLBrButtonElement;
        new (): HTMLBrButtonElement;
    };
    interface HTMLBrInputElement extends Components.BrInput, HTMLStencilElement {
    }
    var HTMLBrInputElement: {
        prototype: HTMLBrInputElement;
        new (): HTMLBrInputElement;
    };
    interface HTMLInputTestElement extends Components.InputTest, HTMLStencilElement {
    }
    var HTMLInputTestElement: {
        prototype: HTMLInputTestElement;
        new (): HTMLInputTestElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "br-accordion": HTMLBrAccordionElement;
        "br-button": HTMLBrButtonElement;
        "br-input": HTMLBrInputElement;
        "input-test": HTMLInputTestElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface BrAccordion {
        "atitle"?: string;
        "content"?: string;
    }
    interface BrButton {
        /**
          * The listener for button
         */
        "callback"?: {
    type: string,
    listener: (eventRaised?: UIEvent) => void,
    capture?: boolean
  };
        /**
          * The primary button
         */
        "primary"?: boolean;
        /**
          * The button title
         */
        "titleBtn"?: string;
    }
    interface BrInput {
        "disabled"?: boolean;
        "icon"?: string;
        "idInput"?: string;
        "label"?: string;
        "name"?: string;
        "placeholder"?: string;
        "type"?: string;
    }
    interface InputTest {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "br-accordion": BrAccordion;
        "br-button": BrButton;
        "br-input": BrInput;
        "input-test": InputTest;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "br-accordion": LocalJSX.BrAccordion & JSXBase.HTMLAttributes<HTMLBrAccordionElement>;
            "br-button": LocalJSX.BrButton & JSXBase.HTMLAttributes<HTMLBrButtonElement>;
            "br-input": LocalJSX.BrInput & JSXBase.HTMLAttributes<HTMLBrInputElement>;
            "input-test": LocalJSX.InputTest & JSXBase.HTMLAttributes<HTMLInputTestElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}

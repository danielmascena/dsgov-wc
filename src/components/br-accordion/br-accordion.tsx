import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'br-accordion',
  styleUrl: 'br-accordion.css',
  shadow: true,
})
export class BRAccordion {

  @Prop() atitle: string;
  @Prop() content: string;

  render() {
    return (<div class="br-accordion">
        <div class="item" data-active>
            <button class="header" type="button">
                <span class="icon"><i class="fas fa-angle-up"></i></span>
                <span class="title">{this.atitle}</span></button>
        </div>
        <div class="content">
            {this.content}
        </div>
    </div>);
  }
}
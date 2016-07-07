import { Component } from '@angular/core'

@Component({
	selector: 'benzene-message-view',
	template: `<div [innerHTML]="messageHtml"></div>`
})
export default class {
	messageHtml = 'abc<br>ab<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abc<br>abcc<br>ab<br>abc<br>abc<br>abc<br>abc<br>abcc'
}

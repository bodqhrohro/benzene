import { Component } from '@angular/core'

import BenzeneUiChannels from './components/channels'
import BenzeneUiMessages from './components/messages'
import BenzeneUiMessageView from './components/message-view'
import BenzeneUiStatistics from './components/statistics'
console.log(BenzeneUiChannels.test())

@Component({
	selector: 'benzene-ui',
	directives: [
		BenzeneUiChannels,
		BenzeneUiMessages,
		BenzeneUiMessageView,
		BenzeneUiStatistics
	],
	template: `
		<benzene-channels class="mdl-cell mdl-cell--2-col">
		</benzene-channels>
		<benzene-messages class="mdl-cell mdl-cell--2-col">
		</benzene-messages>
		<benzene-message-view class="mdl-cell mdl-cell--order-5 mdl-cell-8-col">
		</benzene-message-view>
		<benzene-statistics class="mdl-cell mdl-cell--12-col mdl-cell-bottom">
		</benzene-statistics>
	`
})
export class BenzeneUiComponent { }

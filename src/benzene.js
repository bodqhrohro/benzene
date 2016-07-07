import { Component } from '@angular/core'

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic/ng-semantic'

import Channels from './components/channels'
import Messages from './components/messages'
import MessageView from './components/message-view'
import Statistics from './components/statistics'

@Component({
	selector: 'benzene-ui',
	directives: [
		SEMANTIC_COMPONENTS,
		SEMANTIC_DIRECTIVES,
		Channels,
		Messages,
		MessageView,
		Statistics
	],
	template: `
		<sm-menu class="ui menu inverted row">
			<a sm-item icon="fa fa-bars" (click)="toggleSidebar()" class="item"></a>
		</sm-menu>
		<div
			class="ui grid"
		>
			<div
				class="row nopad move reveal active"
				[ngClass]="{ui: enableSidebar}"
			>
				<div
					class="column ui grid nopad"
					(window:resize)="onResize($event)"
					[ngClass]="{sixteen: enableSidebar, six: !enableSidebar, wide: true, visible: sidebarVisible, hidden: !sidebarVisible, content: true}"
				>
					<benzene-channels class="eight wide column nopad screenheight">
					</benzene-channels>
					<benzene-messages class="eight wide column nopad screenheight">
					</benzene-messages>
				</div>
				<div
					class="column clear screenheight"
					[ngClass]="{sixteen: enableSidebar, ten: !enableSidebar, wide: true, visible: !sidebarVisible, hidden: sidebarVisible, content: true}"
				>
					<benzene-statistics>
					</benzene-statistics>
					<benzene-message-view>
					</benzene-message-view>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.nopad.nopad.nopad {
			padding: 0;
		}
		.ui.grid {
			margin: 0;
			font-size: 0;
		}
		.ui.grid > .row, .ui.grid > .column {
			font-size: 14px;
		}
		.screenheight {
			height: 100vh;
			overflow: auto;
		}
		.ui.move.reveal {
			overflow: auto !important;
		}
	`]
})
export default class {
	sidebarVisible = false
	enableSidebar = false
	toggleSidebar() {
		this.sidebarVisible = !this.sidebarVisible
	}
	onResize() {
		this.enableSidebar = window.innerWidth < 992
	}
	ngOnInit() {
		this.onResize()
	}
}

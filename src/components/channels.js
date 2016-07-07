import { Component } from '@angular/core'

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic/ng-semantic'

@Component({
	selector: 'benzene-channels',
	directives: [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ],
	templateUrl: './menu.html',
	styleUrls: [ './menu.css' ]
})
export default class {
	items = [
		{ label: 'a', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'c', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' },
		{ label: 'b', icon: 'fa fa-rss' }
	]
}

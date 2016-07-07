import { Component } from '@angular/core'

import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from 'ng-semantic/ng-semantic'

@Component({
	selector: 'benzene-messages',
	directives: [ SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES ],
	templateUrl: './menu.html',
	styleUrls: [ './menu.css' ]
})
export default class {
	items = [
		{ label: 'Asdasd', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' },
		{ label: 'BnmBnm', icon: 'fa fa-rss' }
	]
}

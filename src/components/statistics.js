import { Component } from '@angular/core'

import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts'

@Component({
	selector: 'benzene-statistics',
	directives: [ CHART_DIRECTIVES ],
	template: `
		<base-chart
			class="chart"
			[data]="letterChartData"
			[labels]="letterChartLabels"
			[chartType]="pie"
		>
		</base-chart>
		<b>Channels:</b> {{ channelsCount }} <br/>
		<b>Messages:</b> {{ messagesCount }} <br/>
		<b>Authors:</b> {{ authorsCount }} <br/>
	`,
	styles: [`
		.chart {
			float: right;
		}
		:host:after {
			content: "";
			display: table;
			clear: both;
		}
	`]
})
export default class {
	channelsCount = 500
	messagesCount = 300
	authorsCount = 200
	letterChartData = [ 25, 35, 40 ]
	letterChartLabels = [ 'a', 'b', 'c' ]
	pie = "pie"
}

import 'reflect-metadata'
import 'zone.js'
import 'style!css!less!font-awesome-webpack/font-awesome-styles.loader!font-awesome-webpack/font-awesome.config.js'
import 'chart.js/dist/Chart.bundle.min.js'

import { bootstrap } from '@angular/platform-browser-dynamic'

import Benzene from './benzene'

addEventListener('load', () => bootstrap(Benzene, [
]))

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CardInputComponent } from './card-input/card-input';
import { SlideInputComponent } from './slide-input/slide-input';

@NgModule({
	declarations: [CardInputComponent,
        SlideInputComponent
    ],
	imports: [IonicModule],
	exports: [CardInputComponent,
                  SlideInputComponent
    ]
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule,
         MdIconModule, MdInputModule, MdGridListModule} from '@angular/material';


@NgModule({
  imports: [ BrowserAnimationsModule,
   MdButtonModule,
   MdMenuModule,
   MdCardModule,
   MdToolbarModule,
   MdIconModule,
   MdInputModule,
   MdGridListModule ],
  exports: [ BrowserAnimationsModule,
  MdButtonModule,
   MdMenuModule,
   MdCardModule,
   MdToolbarModule,
   MdIconModule,
   MdInputModule,
   MdGridListModule ]
})
export class MaterialModule { }

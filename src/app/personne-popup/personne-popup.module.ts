import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { PersonnePopup } from './personne-popup.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonnePopup],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [PersonnePopup],
})
export class PersonnePopupModule {}

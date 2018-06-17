import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule,
  MatMenuModule,
  MatSidenavModule, MatSliderModule, MatSnackBarModule,
  MatToolbarModule, MatTooltipModule, MatSelectModule, MatBadgeModule, MatChipsModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSelectModule,
    MatBadgeModule,
    MatChipsModule
  ],
})
export class MaterialModule { }

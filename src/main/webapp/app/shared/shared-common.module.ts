import { NgModule } from '@angular/core';

import { RfbloyalitySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [RfbloyalitySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [RfbloyalitySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RfbloyalitySharedCommonModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RfbloyalitySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RfbloyalitySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [RfbloyalitySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbloyalitySharedModule {
  static forRoot() {
    return {
      ngModule: RfbloyalitySharedModule
    };
  }
}

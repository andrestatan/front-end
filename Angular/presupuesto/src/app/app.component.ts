import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto';
  selectedLanguage = 'es';

  constructor(private translateService: TranslateService) {
      this.translateService.setDefaultLang(this.selectedLanguage);
  }

}

import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

	public constructor(
		public auth: AuthService,
		private changeDetector: ChangeDetectorRef
	) { }

	public isOpen: boolean = true;

	// This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
	public ngAfterViewChecked(): void {
		this.changeDetector.detectChanges();
	}

	public toggleSidebar() {
		this.isOpen = !this.isOpen;
	}

}

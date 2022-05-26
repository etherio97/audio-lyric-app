import { Component } from '@angular/core';
import { MENU_ITEMS } from 'src/app/app.config';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/core/types/menu-item.type';

@Component({
  selector: 'app-top-bar',
  templateUrl: './app-top-bar.component.html',
})
export class AppTopBarComponent {
  public readonly menuItems: MenuItem[] = MENU_ITEMS;

  constructor(private readonly menuService: MenuService) {}

  dispatch(action: string) {
    this.menuService.dispatch(action);
  }
}

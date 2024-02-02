import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './Home/shell/shell.component';
import { WelcomeComponent } from './Home/welcome/welcome.component';
import { Page404Component } from './Home/page404/page404.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '',
    component: ShellComponent,
    children: [
        { path: 'welcome', component: WelcomeComponent},
        {path: 'products', 
    loadChildren: () => import("./Products/product.module").then(
        m => m.ProductModule
    )},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'},
    // {path:}
    ]
  },
  {path: '**', component: Page404Component}

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutes {}

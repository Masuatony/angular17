import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ProductData } from "./Products/product-data";
import { AppRoutes } from "./app.routes";
import { MatCard } from "@angular/material/card";
import { WelcomeComponent } from "./Home/welcome/welcome.component";
import { ShellComponent } from "./Home/shell/shell.component";
import { MenuComponent } from "./Home/menu/menu.component";

@NgModule({
    bootstrap: [],
    declarations: [],
    imports: [
        HttpClientModule,
        AppRoutes,
        HttpClientInMemoryWebApiModule.forRoot(ProductData),
        MatCard,
        // ShellComponent,
        // MenuComponent
        // WelcomeComponent
    ]
})
export class AppModule {}
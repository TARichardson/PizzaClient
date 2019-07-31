import { RouterModule, Routes} from '@angular/router';

// Component
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

// Route
const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: 'users', component: UsersComponent},
    {path: 'products', component: ProductsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {}

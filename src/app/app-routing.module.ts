import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { VAuthGuard } from './guards/v-auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'vendor',
    loadChildren: () => import('./vendor/vendor.module').then( m => m.VendorPageModule),
    canActivate: [VAuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'a-login',
    loadChildren: () => import('./auth/admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'a-register',
    loadChildren: () => import('./auth/admin-register/admin-register.module').then( m => m.AdminRegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/user-register/user-register.module').then( m => m.UserRegisterPageModule)
  },
  {
    path: 'vlog',
    loadChildren: () => import('./auth/vendor-login/vendor-login.module').then( m => m.VendorLoginPageModule)
  },
  {
    path: 'vreg',
    loadChildren: () => import('./auth/vendor-register/vendor-register.module').then( m => m.VendorRegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'guest',
    loadChildren: () => import('./guest/guest.module').then( m => m.GuestPageModule)
  },
  {
    path: 'vprof',
    loadChildren: () => import('./v-profile/v-profile.module').then( m => m.VProfilePageModule), canActivate: [VAuthGuard]
  },
  {
    path: 'vedit',
    loadChildren: () => import('./v-editprof/v-editprof.module').then( m => m.VEditprofPageModule), canActivate: [VAuthGuard]
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'u-search',
    loadChildren: () => import('./u-search/u-search.module').then( m => m.USearchPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

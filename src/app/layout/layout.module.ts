import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from '@angular/router';
import { HeroSection } from './components/content/sections/hero/hero.section';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ContentComponent, HeroSection],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, ContentComponent],
})
export class LayoutModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';
import { BlockComponent } from './node/block/block.component';
import { LeftZerosPipe } from './pipes/left-zeros.pipe';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent, BlockComponent, LeftZerosPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

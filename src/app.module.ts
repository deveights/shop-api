import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://deveights:TJUzJug4YZXWLnwZ@cluster0.dhe5j5d.mongodb.net/shop',
    ),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

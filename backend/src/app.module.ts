import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoginModule } from "./nickname/login/login.module";
import { NicknameModule } from "./nickname/nickname.module";
import { SecondAuthModule } from "./second-auth/second-auth.module";
import { UserinfoModule } from "./userinfo/userinfo.module";
import { RecordModule } from "./record/record.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from "./configs/typeorm.configs";

@Module({
  imports: [
    LoginModule,
    NicknameModule,
    SecondAuthModule,
    UserinfoModule,
    RecordModule,
    TypeOrmModule.forRoot(typeORMConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

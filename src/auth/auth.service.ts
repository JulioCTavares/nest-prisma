import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'Signed up' };
  }

  signin() {
    return { msg: 'Signed in' };
  }
}

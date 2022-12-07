import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Que onda tutor como andas todo bien? Pues nada aca aprendiendo un framework en 1 semana JAJAJAJ ';
  }
}

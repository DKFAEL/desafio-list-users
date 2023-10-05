import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      cpf: '123.456.789-00',
      celular: '555-555-5555',
      tipoContato: 'Celular'
    },
    
    
  ];

  private currentId = 2; // Inicialize o contador com 1

  getUsers(): User[] {
    return this.users;
  }

  getUserById(userId: number): User {
    const user = this.users.find((user) => user.id === userId);
    if (user) {
      return user;
    }
    // Se o usuário não for encontrado, retorne um usuário vazio ou trate de outra maneira
    return {
      id: 0, // Defina um ID padrão
      name: '',
      email: '',
      cpf: '',
      celular: '',
      tipoContato: ''
    };
  }
  
  

  addUser(user: User) {
    user.id = this.generateId();
    this.users.push(user);
  }

  editUser(user: User) {
    const index = this.users.findIndex((u) => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

private generateId(): number {
  const uniqueId = this.currentId;
  this.currentId++; // Incrementa o contador para o próximo ID único
  return uniqueId;
}

}
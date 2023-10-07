import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private dialog : MatDialog
    ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  openAddUserModal(): void {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '800px',
      height: '340px'
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Após a adição de um usuário, atualize a lista de usuários
      this.userService.getUsers().subscribe((users) => {
        this.users = users;
      });
    });
  }
  
  openEditUserModal(userId: number): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '800px',
      height: '340px',
      data: { userId },
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Após a edição de um usuário, atualize a lista de usuários
      this.userService.getUsers().subscribe((users) => {
        this.users = users;
      });
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Tem certeza de que deseja excluir este usuário?')) {
      this.userService.deleteUser(userId).subscribe((result) => {
        // Remova o usuário da lista após a exclusão
        this.users = this.users.filter((user) => user.id !== userId);
      });
    }
  }

  searchUsers(searchValue: string): void {
    this.userService.getUsers().subscribe((users) => {
      if (searchValue && searchValue.trim() !== '') {
        // Filtrar usuários com base no valor da pesquisa
        users = users.filter((user) => {
          return user.name.toLowerCase().includes(searchValue.toLowerCase());
        });
      }
  
      this.users = users;
    });
  }
  
}
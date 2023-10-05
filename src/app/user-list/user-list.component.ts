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
    this.users = this.userService.getUsers();
  }

  openAddUserModal(): void {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '800px', // Defina o tamanho do modal
      height:'340px'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Processar os dados quando o modal for fechado, se necessário
    });
  }

  openEditUserModal(userId: number): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '800px',
      height: '340px',
      data: { userId }, // Passando o ID do usuário para o componente de edição
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Processar os dados quando o modal for fechado, se necessário
    });
  }
  
  
    
  
}
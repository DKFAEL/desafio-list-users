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
      width: '400px', // Defina o tamanho do modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Processar os dados quando o modal for fechado, se necessário
    });
  }

  openEditUserModal(): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      width: '400px', // Defina o tamanho do modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Processar os dados quando o modal for fechado, se necessário
    });
  }
}

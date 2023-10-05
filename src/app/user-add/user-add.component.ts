import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    email: '',
    cpf: '',
    celular: '',
    tipoContato: 'celular'
  };
  modalTitle: string = 'Adicionar Usuário';

  constructor(
    private userService: UserService,
    private router: Router,
    private dialogRef: MatDialogRef<UserAddComponent>
  ) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
   // Lógica para adicionar um usuário
   this.userService.addUser(this.user);
   this.router.navigate(['/users']);

     // Fechar o modal após a adição de usuário
  this.dialogRef.close();
  }


  Close(): void {
     this.dialogRef.close();
  }
 



}

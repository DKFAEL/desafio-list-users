import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAddComponent } from '../user-add/user-add.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  user: User = {
    id: 0,
    name: '',
    email: '',
    cpf: '',
    celular: '',
  };
  modalTitle: string = "Editar Usúario"


  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<UserEditComponent>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId && userId !== 'add') {
        // Carregue os dados do usuário a ser editado
        const userToEdit = this.userService.getUserById(Number(userId));
        if (userToEdit) {
          this.modalTitle = 'Editar Usuário';
          this.user = { ...userToEdit }; // Crie uma cópia para evitar a alteração direta do objeto original
        }
      } 
    });
  }

  onSubmit(): void {
    // Lógica para editar um usuário
    this.userService.editUser(this.user);
    this.router.navigate(['/users']);

    // Fechar o modal após a adição de usuário
  this.dialogRef.close();
  }

  Close(): void {
    this.dialogRef.close();
 }
}

 


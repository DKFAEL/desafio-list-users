import { Component, Inject } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  public user: User = {
    id: 0,
    name: '',
    email: '',
    cpf: '',
    celular: '',
    tipoContato: ''
  };
  modalTitle: string = "Editar Usuário";

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { userId: number }
  ) {}

  ngOnInit(): void {
    const userId = this.data.userId;
    if (userId) {
      // Carregue os dados do usuário a ser editado
      this.userService.getUserById(userId).subscribe((user) => {
        if (user) {
          this.modalTitle = 'Editar Usuário';
          this.user = { ...user };
        }
      });
    }
  }

  onSubmit(): void {
    // Lógica para editar um usuário
    this.userService.editUser(this.user).subscribe(() => {
      this.router.navigate(['/users']);
      // Fechar o modal após a edição do usuário
      this.dialogRef.close();
    });
  }

  Close(): void {
    this.dialogRef.close();
  }
}

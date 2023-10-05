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

   public user!: User;
  modalTitle: string = "Editar Usuário";
                 
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { userId: number }
  ) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params) => {
  //     const userId = params.get('id');
  //     if (userId && userId !== 'add') {
  //       // Carregue os dados do usuário a ser editado
  //       const userToEdit = this.userService.getUserById(Number(userId));
  //       if (userToEdit !== undefined) {
  //         this.modalTitle = 'Editar Usuário';
  //         this.user = { ...userToEdit }; // Crie uma cópia para evitar a alteração direta do objeto original
  //       }
  //     } 
  //   });
  // }

  ngOnInit(): void {
    const userId = this.data.userId;
    if (userId) {
      // Carregue os dados do usuário a ser editado
      this.user = this.userService.getUserById(userId);
    }
  }

  onSubmit(): void {
    // Lógica para editar um usuário
    this.userService.editUser(this.user);
    this.router.navigate(['/users']);

    // Fechar o modal após a edição do usuário
    this.dialogRef.close();
  }

  Close(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  public user!: User  
  modalTitle: string = "Editar Usuário";
  

  public formUser: FormGroup;

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { userId: number },
    private fb: FormBuilder,
  ) {
    // Inicialize o formulário com validadores
    this.formUser = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      celular: ["", [Validators.required, Validators.minLength(10)]],
      tipoContato: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    const userId = this.data.userId;
    if (userId) {
      // Carregue os dados do usuário a ser editado
      this.userService.getUserById(userId).subscribe((user) => {
        if (user) {
          this.modalTitle = 'Editar Usuário';
          this.user = user; // Atribue o usuário carregado

          // Atualize o formulário para refletir os valores do usuário
          this.formUser.patchValue({
            name: this.user.name,
            email: this.user.email,
            cpf: this.user.cpf,
            celular: this.user.celular,
            tipoContato: this.user.tipoContato,
          });
        }
      });
    }
  }

  onSubmit(): void {
    // Lógica para editar um usuário
    if (this.formUser.valid) {
      // Atualize os dados do usuário com os valores do formulário
      this.user.name = this.formUser.value.name;
      this.user.email = this.formUser.value.email;
      this.user.cpf = this.formUser.value.cpf;
      this.user.celular = this.formUser.value.celular;
      this.user.tipoContato = this.formUser.value.tipoContato;

      this.userService.editUser(this.user).subscribe((response) => {
        this.dialogRef.close();
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

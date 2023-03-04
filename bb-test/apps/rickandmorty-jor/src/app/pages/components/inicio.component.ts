import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { characters } from '../models/characters.model';
import { RickAndMortyService } from '../services/rickandmorty.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'bb-test-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  characters!: characters[];
  filter = '';
  form: FormGroup;

  constructor(public _rickAndMortyService: RickAndMortyService,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        filter: new FormControl('')
      }
    );
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this._rickAndMortyService.getCharacter(this.filter).subscribe({
      next: (response) => {
        this.characters = response.results
      }
    });
  }

  search() {
    this.filter = this.form.value['filter'];
    this.getUsuarios();
  }

}

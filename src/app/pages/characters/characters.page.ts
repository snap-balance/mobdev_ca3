import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ApiService } from '../..//services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

  characters: Observable<any>;
  constructor(private navController: NavController, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.characters = this.api.getCharacters();
  }

  openDetails(character){
    let characterId = character.char_id;
    this.router.navigateByUrl(`/tabs/characters/${characterId}`);
  }
}

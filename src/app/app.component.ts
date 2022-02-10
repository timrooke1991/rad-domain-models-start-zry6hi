import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core/lib/core';

// NOTE 01:
// When we understand a domain entity, we can make
// all sorts of inferences about the rest of the app
// including the form required to manage that entity

// What do you think an Album form would look like?
export interface Album {
  title: string;
  description: string;
}

// What do you think a User form would look like?
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// NOTE 02:
// We can use a schema to extend our ability to describe properties.
// We are borrowing from the approach that JSON Schema takes.
export interface Schema {
  model: string;
  modelPlural: string;
  props?: Prop[];
}

export interface Prop {
  [key: string]: any;
}

// NOTE 03:
// Convert our interfaces into schemas
const albumSchema: Schema = {
  model: 'album',
  modelPlural: 'albums',
  props: [
    {
      key: 'title',
      type: 'input',
      templateOptions: {
        label: 'Album Title',
        placeholder: 'Enter an album title',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'input',
      templateOptions: {
        label: 'Album Description',
        placeholder: 'Enter an album description',
      },
    },
  ],
};

// CHALLENGE:
// Create a userSchema and update the form to render the new schema

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // NOTE 04:
  // Using a tool like Formly,
  // we can auto-generate a form based on our schema
  form = new FormGroup({});
  model: any = {};
  schema: Schema = albumSchema;
  options: FormlyFormOptions = {};

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

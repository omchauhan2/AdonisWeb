import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Validator1 from 'App/Validators/Validator1';
export default class Controller1 {

    public async register({ request, response, view }: HttpContextContract) {

        const formData = request.all();

        const name = formData.name;
        const password = formData.password;
        const email = formData.email;

        let users = await Database.table('Register').insert({
            Name: name,
            Email: email,
            Password: password
        });
        if (users) {
            return view.render('success');
        }

    }

    public async login({ request, response, view }: HttpContextContract) {

        const formData = request.all();

        const name = formData.username;
        const password = formData.password;
        const email = formData.username;

        let users = await Database.from('Register').select('*').where('Email', email).where('Password', password);
        if (users.length > 0) {
            return view.render('loginSuccess');
        }

    }

    public async fetchData({ request, response, view }: HttpContextContract) {

        let fetchQuery = await Database.from('Register').select('*');
        // return fetchQuery

        for (let user in fetchQuery) {
            console.log(user);

            return user
        }


        if (fetchQuery.length > 0) {
            return view.render('fetch', { user: fetchQuery });
        }

    }

    public async update({ request, response, view }: HttpContextContract) {

        let fetchQuery = await Database.from('Register').select('*');

        if (fetchQuery.length > 0) {
            return view.render('fetch', { fetchQuery });
        }

    }

}

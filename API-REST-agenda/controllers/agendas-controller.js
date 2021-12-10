const Agenda = require('../models/agendas-model');

function add_agendas (request, response){
    let agenda = new Agenda({
        name: request.body.name,
        lastname: request.body.lastname,
        age: request.body.age,
        phoneNumber: request.body.phoneNumber
    });

    agenda.save((error, result) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (!result){
            return response.status(400).json({
                error: true,
                message: `Client error: ${error}`,
                code: 20
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
    });
}

function read_agendas (request, response){
    Agenda.find().exec((error, agendas) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: agendas,
            code: 10
        });
    });
}

function delete_agendas (request, response){
    const agenda_id = request.params.id;
    Agenda.deleteOne({_id: agenda_id}, (error, result) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (result === null){
            return response.status(400).json({
                error: true,
                message: `Not Found`,
                code: 30
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });

    });
}

function update_agendas (request, response){
    const agenda_id = request.params.id;
    const data = request.body;
    Agenda.findByIdAndUpdate(agenda_id, data, {new: true}, (error, result) => {
        if (error){
            return response.status(500).json({
                error: true,
                message: `Server error: ${error}`,
                code: 0
            });
        }

        if (!result){
            return response.status(400).json({
                error: true,
                message: 'Not found',
                code: 30
            });
        }

        return response.status(200).json({
            error: false,
            message: 'Success',
            data: result,
            code: 10
        });
    });
}

module.exports = {
    read_agendas,
    add_agendas,
    delete_agendas,
    update_agendas
};
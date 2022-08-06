import { prisma } from '../database/prisma'
const show = async (req: any, res: any) => {
    const id = parseInt(req.params.toDoId)
    const toDo = await prisma.toDo.findUnique({
        where: {
            id: id
        }
    })
    if (toDo) {
        res.json(toDo);
        res.status(200).send();
    } else {
        res.status(404).send();
    }
};
const index = async (req: any, res: any) => {
    const toDos = await prisma.toDo.findMany()
    res.json(toDos);
    res.status(200).send();
};
const create = async (req: any, res: any) => {
    const { title } = req.body
    const toDoCreated = await prisma.toDo.create({
        data: {
            title
        }
    })
    res.json(toDoCreated).status(200).send();
};
const update = async (req: any, res: any) => {
    const {id, title, done} = req.body
    const toDoUpdated = await prisma.toDo.update({
        where: {
            id: id
        },
        data: {
            title: title,
            done: done
        }
    })
    res.json(toDoUpdated).status(200).send()
}
const destroy = async (req:any, res:any) => {
    const {id} = req.body
    const toDoDeleted = await prisma.toDo.delete({
        where: {
            id: id
        }
    })
    res.json(toDoDeleted).status(200).send()
}
module.exports = {
    show,
    index,
    create,
    update,
    destroy
}
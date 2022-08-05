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
    const { title, done } = req.body
    const toDo = await prisma.toDo.create({
        data: {
            title,
            done
        }
    })
    res.json(toDo).status(200).send();
};

module.exports = {
    show,
    index,
    create
}
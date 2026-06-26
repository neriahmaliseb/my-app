import { connectDB } from "@/lib/mongodb";
import Task from "@/models/Task";

export async function GET() {
  await connectDB();
  const tasks = await Task.find();
  return Response.json(tasks);
}

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const task = await Task.create({
    title: body.title,
    description: body.description,
  });

  return Response.json(task);
}

export async function DELETE(req: Request) {
  await connectDB();
  const { searchParams } = new URL(req.url);

  const id = searchParams.get("id");

  await Task.findByIdAndDelete(id);

  return Response.json({ success: true });
}

export async function PUT(req: Request) {
  await connectDB();
  const body = await req.json();

  const updated = await Task.findByIdAndUpdate(
    body.id,
    { completed: body.completed },
    { new: true }
  );

  return Response.json(updated);
}
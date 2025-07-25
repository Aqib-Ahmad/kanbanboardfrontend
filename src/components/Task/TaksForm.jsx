import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormInput from "../Form/FormInput";
import FormSelect from "../Form/FormSelect";
import { Button } from "../ui/button";
import FormContainer from "../Form/FormContainer";
import FormMultiSelect from "../Form/FormMultiSelect";
import { useTasks } from "@/Context/TaskContext"; //
const TaksForm = () => {
  const [loading, setLoading] = useState(false);
  const { handleAddTask } = useTasks(); //

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-amber-500 px-6 mt-2 cursor-pointer"
          variant="default"
          size="lg"
        >
          + Add
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-blue-200">
        <DialogHeader>
          <DialogTitle className="flex text-blue-600">Add Task</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <FormContainer onSubmit={(e) => handleAddTask(e, setLoading)}>
          <div className="">
            <FormInput
              id="title"
              name="title"
              type="text"
              placeholder="Task Name"
              label="Task Name"
            />
            <FormInput
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              label="Description"
            />
            <FormSelect
              heading="project"
              className="w-full mb-2 "
              name="projects"
              categories={["one", "two", "three"]}
            />
            <FormInput
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="Thumbnail"
              label="Thumbnail (image url)"
            />
            <FormMultiSelect
              heading="Tags"
              name="tags"
              options={["Moderate-Priority", "High-Priority", "Low-Priority"]}
            />
            <FormSelect
              heading="status"
              className="w-full mb-2 "
              name="status"
              categories={["todo", "in-progress", "done"]}
            />
            <FormInput
              label="time"
              id="date"
              name="date"
              type="date"
              placeholder="Date"
            />
          </div>
          <Button
            disabled={loading}
            className="bg-amber-500 px-6 mt-2 cursor-pointer"
            variant="default"
            size="sm"
          >
            Save
          </Button>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default TaksForm;

import React, {useEffect} from "react";
import { Box } from "@mui/material";
import Column from "./Column.js";
import useStore from "./store.js";

export default function Board() {
	
	const { columns, fetchTasks } = useStore();
	useEffect(() => {
		console.log("ENTERED USEEFFECT IN BOARD.JS")
		fetchTasks();
	}, [fetchTasks]);
	
	return (
		<Box
			sx={{
				display: "flex",
				gap: 2,
				overflowX: "auto",
				padding: "16px 0",
			}}
		>
			{Object.values(columns).map((column) => (
				<Column
					key={column.id}
					id={column.id}
					title={column.title}
					tasks={column.tasks}
				/>
			))}
		</Box>
	);
}

import { Test } from "@prisma/client";

export abstract class TestRepository {
    abstract getTest(id: number): Promise<Test>;
    abstract createTest(test: string): Promise<Test>;
}
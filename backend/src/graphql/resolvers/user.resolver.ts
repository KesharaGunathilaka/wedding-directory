// Resolver provides the instructions for turning 
// a GraphQL operation (query, mutation, subscription) into data. 

// Primary goal of resolver is to populate the correct fields with data

import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UserModel } from "../models/user.model";
import { CreateUserInput } from "../inputs/createUser";
import { UserService } from 'src/modules/user/user.service';
import { UserSettingService } from "src/modules/user/userSetting.service";
import { UserSettingModel } from "../models/userSetting.model";

// Tell the resolver that User is the parent
@Resolver(() => UserModel) // You need to do this if you're using ResolveField
export class UserResolver {

    constructor(
        private userService: UserService,
        private userSettingService: UserSettingService,
    ) {}

    // Make nullable to handle non existent ids
    @Query(() => UserModel, { nullable: true})
    // Pass in arguments using the Args decorator
    // Specify type as Int because default is float
    getUserById(@Args('id', { type: () => Int }) id: number): Promise<UserModel> {
        return this.userService.getUserById(id);
    }

    @Query(() => [UserModel])
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    // Add the name so that it doesn't create another field
    @ResolveField(() => UserSettingModel, { name: 'settings', nullable: true })
    getUserSettings(@Parent() user: UserModel) {
        return this.userSettingService.getUserSettingById(user.id);
    }

    @Mutation(() => UserModel)
    createUser(@Args('createUserData') createUserData: CreateUserInput) {
      return this.userService.createUser(createUserData);
    }
}
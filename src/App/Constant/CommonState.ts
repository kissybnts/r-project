// Common State Declaration
export interface EntityState {
  id: number;
}

export interface UserRelationEntityState extends EntityState {
  userId: number;
}